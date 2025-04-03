var offers = [
  {
    id: "0",
    name: "Offer One",
    description: "Our cool package number one!",
    price: "1 000",
  },
  {
    id: "1",
    name: "Offer Two",
    description: "Our super cool package number two! ",
    price: "10 000",
  },
  {
    id: "2",
    name: "Offer Three",
    description: "Our astonishing package number three!",
    price: "100 000",
  },
];

offers.forEach((offer, index) => {
  var card = document.createElement("div");
  card.classList.add("card");

  var title = document.createElement("span");
  title.textContent = offer.name;
  title.classList.add("card-title");

  var description = document.createElement("span");
  description.textContent = offer.description;

  var price = document.createElement("span");
  price.textContent = offer.price;
  price.classList.add("card-price");

  var button = document.createElement("button");
  button.setAttribute("onclick", `showOffer(${index})`);
  button.classList.add("offer-button");
  button.textContent = "Purchase";

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);
  card.appendChild(button);

  var offerBlock = document.getElementById("offers");
  offerBlock.appendChild(card);
});

var showOffer = (index) => {
  var modal = document.getElementsByClassName("modal-backdrop")[0];
  modal.style.display = "grid";

  var item = document.getElementsByClassName("item")[0];
  item.style.display = "block";
  item.textContent = `You're about to order ${offers[index].name}`;

  var price = document.getElementsByClassName("price")[0];
  price.style.display = "block";
  price.textContent = `Total price: ${offers[index].price}`;

  var offer = document.querySelector("[name='offer']");
  offer.setAttribute("value", `${offers[index].name}`);

  var form = document.getElementById("contact-form");
  form.append(offer);
};

var form = document.getElementById("contact-form");

var handleSubmit = (e) => {
  e.preventDefault();
  var data = new FormData(form);
  if (data.get("offer")) {
    form.reset();
  } else {
    data.delete("offer");
    form.reset();
  }
};
