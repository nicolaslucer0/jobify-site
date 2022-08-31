var UserService = (function () {
  var full_name = "";
  var picture_url = "";

  var getName = function () {
    return full_name;
  };

  var getPicture = function () {
    return picture_url;
  };

  var setName = function (name: string) {
    full_name = name;
  };

  var setPicture = function (picture: string) {
    picture_url = picture;
  };

  return {
    getName: getName,
    setName: setName,
    setPicture: setPicture,
    getPicture: getPicture,
  };
})();
export default UserService;
