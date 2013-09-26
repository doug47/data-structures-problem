var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};
var west_side_array = [];
var east_side_array = [];
var west_side_boolean = true; 

window.new_user_joined = function(name) {

users_joined.unshift(name);
console.log(users_joined)
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() 
  {
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
	//var west_side_boolean = true; 

  user

    for (var i = 0; i < users_joined.length; i++) 
    {
    	
    	if(west_side_boolean) 
    	{
    		west_side_array.unshift(users_joined);
    		$('#west_users').append('<p><button type="button" class="btn btn-warning btn-xs">'+users_joined[i]+'</button></p>');
    		// $('#west_users').append('<p><button type="button" class="btn btn-warning btn-xs">'+users_joined[1]+'</button></p>');
    		users_joined.pop();
    		west_side_boolean = false;
    	}
    	else
    	{
    		east_side_array.unshift(users_joined);
    		$('#east_users').append('<p><button type="button" class="btn btn-warning btn-xs">'+users_joined[i]+'</button></p>');
    		users_joined.pop();
    		west_side_boolean = true;
    	}
    	// debugger;
    };
  }
     
