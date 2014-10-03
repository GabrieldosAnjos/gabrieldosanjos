console.log("====== teste =======");

window.name = "window";
 
gabriel = {
  name: "object",
 
  action: function() {
    nestedAction = function(greeting) {
      console.log(greeting + " " + this.name);
    }
 
    nestedAction("hello");
  }
}
 
gabriel.action("hello");