import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  // Types
  type Submission = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    reservedDate : Text;
    reservedTime : Text;
    partySize : Nat;
    message : Text;
  };

  type MenuItem = {
    name : Text;
    category : Text;
    priceRange : Text;
    description : Text;
    isPopular : Bool;
  };

  type Review = {
    reviewer : Text;
    rating : Nat;
    text : Text;
    published : Bool;
  };

  // Business Info
  type BusinessInfo = {
    address : Text;
    phone : Text;
    hours : Text;
    rating : Nat;
  };

  // Persistent Storage
  let submissions = Map.empty<Nat, Submission>();
  var nextSubmissionId = 1;

  let menuItems = Map.empty<Text, MenuItem>();
  let reviews = Map.empty<Text, Review>();

  // Pre-seed menu items and reviews
  public shared ({ caller }) func init() : async () {
    let items = [
      {
        name = "Paneer Tikka";
        category = "Starters";
        priceRange = "₹250-₹300";
        description = "Spicy grilled paneer cubes served with mint chutney";
        isPopular = true;
      },
      {
        name = "Masala Dosa";
        category = "South Indian";
        priceRange = "₹80-₹120";
        description = "Crispy rice crepe filled with spicy potato masala";
        isPopular = true;
      },
    ];

    let reviewsArray = [
      {
        reviewer = "Alice";
        rating = 5;
        text = "Excellent food and great service!";
        published = true;
      },
      {
        reviewer = "Bob";
        rating = 4;
        text = "Loved the variety of dishes.";
        published = true;
      },
    ];

    for (item in items.values()) {
      menuItems.add(item.name, item);
    };

    for (review in reviewsArray.values()) {
      reviews.add(review.reviewer, review);
    };
  };

  // Form submission
  public shared ({ caller }) func submitForm(
    name : Text,
    phone : Text,
    email : Text,
    reservedDate : Text,
    reservedTime : Text,
    partySize : Nat,
    message : Text,
  ) : async Nat {
    let submission : Submission = {
      id = nextSubmissionId;
      name;
      phone;
      email;
      reservedDate;
      reservedTime;
      partySize;
      message;
    };

    submissions.add(nextSubmissionId, submission);
    let submissionId = nextSubmissionId;
    nextSubmissionId += 1;
    submissionId;
  };

  // Menu
  public query ({ caller }) func getMenuCategories() : async [Text] {
    menuItems.values().toArray().map(func(item) { item.category });
  };

  public query ({ caller }) func getMenuItemsByCategory(category : Text) : async [MenuItem] {
    menuItems.values().toArray().filter(
      func(item) {
        item.category == category;
      }
    );
  };

  public query ({ caller }) func getPopularMenuItems() : async [MenuItem] {
    menuItems.values().toArray().filter(
      func(item) {
        item.isPopular;
      }
    );
  };

  // Reviews
  public query ({ caller }) func getPublishedReviews() : async [Review] {
    reviews.values().toArray().filter(
      func(review) {
        review.published;
      }
    );
  };

  // Business Info
  public query ({ caller }) func getBusinessInfo() : async BusinessInfo {
    {
      address = "123 Kastura St, Bangalore, India";
      phone = "+91 12345 67890";
      hours = "Mon-Sun: 10am - 10pm";
      rating = 5;
    };
  };

  // Admin functions
  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray();
  };

  public query ({ caller }) func getSubmissionById(id : Nat) : async Submission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };
};
