import axios from "axios";
import { useState } from "react";
import "./profile.scss";
import { BsFillPenFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { useUserInfoContext } from "../../context/UserInfoContext";

export default function UserInfo() {
  const { setImageProfile, userInfo } = useUserInfoContext();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const handleChange = (e) => {
    var file = e.target.files[0];
    setImage(file);
    // Assuming only image
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setImagePreview(reader.result);
    };
  };

  // Assuming only image

  //var file = this.refs.file.files[0];
  //var reader = new FileReader();
  //var url = reader.readAsDataURL(file);
  //
  // reader.onloadend = function (e) {
  //    this.setState({
  //        imgSrc: [reader.result];
  //    })
  //  }.bind(this);
  //console.log(url) // Would see a path?

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("image", image, image.name);
    axios
      .put("/user/changeProfileImage", form)
      .then((res) => {
        toast.success("profile image changed");
        setImageProfile(res.data.path);
      })
      .catch((err) => toast.error(err.response?.data?.message || err.message));
  };

  return (
    <div className="info-user">
      <img
        src={imagePreview || userInfo?.image}
        className="profileImagePreview"
        alt="profileImage"
      />

      <form
        className="form-foto"
        name="fileForm"
        data-netifly="true"
        onSubmit={handleSubmit}
      >
        <label htmlFor="file">
          <BsFillPenFill className="pen" /> Choose your picture...
        </label>{" "}
        <input
          className="browse"
          type="file"
          name="file"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
