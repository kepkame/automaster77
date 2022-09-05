export default () => {
  // forEach for IE11
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if (!Object.entries) {
    Object.entries = (obj) => {
      const ownProps = Object.keys(obj);
      let i = ownProps.length;
      const resArray = new Array(i); // preallocate the Array
      while (i--) {
        resArray[i] = [ownProps[i], obj[ownProps[i]]];
      }

      return resArray;
    };
  }
};
