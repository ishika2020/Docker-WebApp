var count = 1
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)


var mousein = false
function demo() {
   if(mousein) return
   document.getElementById('demo' + count++)
      .classList.toggle('hover')
   
}

function demo2() {
   if(mousein) return
   document.getElementById('demo2')
      .classList.toggle('hover')
}

function reset() {
   count = 1
   var hovers = document.querySelectorAll('.hover')
   for(var i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover')
   }
}

document.addEventListener('mouseover', function() {
   mousein = true
   reset()
})

var modal = document.getElementById('1');

window.onclick = function(event) {
   if (event.target == modal){
      modal.style.display = "none";
   }
}


function create_container(){
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "http://192.168.1.12/cgi-bin/docker.py?op=create_container", true);
   xhr.send();

   xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("m1").innerHTML = output;
   }

}

function run_container(){
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "http://192.168.1.12/cgi-bin/docker.py?op=run_container", true);
   xhr.send();

   xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("m1").innerHTML = output;
   }

}

function stop_container(){
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "http://192.168.1.12/cgi-bin/docker.py?op=stop_container", true);
   xhr.send();

   xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("m1").innerHTML = output;
   }

}

function docker_copy(){
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "http://192.168.1.12/cgi-bin/docker.py?op=docker_copy", true);
   xhr.send();

   xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("m1").innerHTML = output;
   }

}

function running_container_info(){
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "http://192.168.1.12/cgi-bin/docker.py?op=running_container_info", true);
   xhr.send();

   xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("m1").innerHTML = output;
   }

}

function all_images(){
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "http://192.168.1.12/cgi-bin/docker.py?op=all_images", true);
   xhr.send();

   xhr.onload = function() {
      var output = xhr.responseText;
      document.getElementById("m1").innerHTML = output;
   }

}
