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


      //*
    //   <div class="title-header" style="display: flex; justify-content:space-between;" >
    // <header style="display: inline; justify-content:space-between; padding: 1rem;">
    
    //         <h1>
    //             <label for="">
    //                 <span class="las la-bars"></span>
    //             </label>
    //             Dashboard
    //         </h1>
    //         <div class="search-wrapper">
    //             <!-- <span class="las la-search"></span> -->
    //             <input type="search" placeholder="Search here" id="">
    //         </div>
    //         <div class="user-wrapper">
    //             <!-- <img src="vsw&l.jpg" width="100px" height="40px" alt=""> -->
    //             <div>
    //                 <h4> Shravani Sawant</h4>
    //                 <small>Admin</small>

    //             </div>

    //     </div>
    */