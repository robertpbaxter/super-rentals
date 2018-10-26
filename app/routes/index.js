import Route from "@ember/routing/route";

export default Route.extend({
  beforeModel() {
    this.replaceWith("rentals"); //a model hook that redirects to the rentals route instead of index
  }
});
