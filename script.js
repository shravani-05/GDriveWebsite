function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

      if(username=="shravani"&& password=="123456")
        {
          alert("login succesfully");
          return true;
        }
      else
        {
          alert("login failed");
          return false;
        }
      }