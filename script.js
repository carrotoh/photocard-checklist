const files = [
  // S
  "s1.jpg",
  "s2.jpg",
  "s3.jpg",
  "s4.jpg",

  // T
  "t1.jpg",
  "t2.jpg",
  "t3.jpg",
  "t4.jpg",
  "t5.jpg",
  "t6.jpg",
  "t7.jpg",

  // TK
  "tk1.jpg",
  "tk2.jpg",
  "tk3.jpg",
  "tk4.jpg",
  "tk5.jpg",
  "tk6.jpg",
  "tk7.jpg",

  // M
  "m1.jpg",
  "m2.jpg",
  "m3.jpg",
  "m4.jpg",
  "m5.jpg",
  "m6.jpg",
  "m7.jpg",
];

const total = files.length;

const grid = document.getElementById("grid");
const count = document.getElementById("count");

const STORAGE_KEY = "photocard-check";

let checked = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

files.forEach((file) => {
  const card = document.createElement("div");
  card.className = "card";

  if (checked.includes(file)) {
    card.classList.add("checked");
  }

  card.innerHTML = `
        <img src="images/${file}" alt="${file}">
    `;

  card.onclick = () => {
    card.classList.toggle("checked");

    if (card.classList.contains("checked")) {
      if (!checked.includes(file)) checked.push(file);
    } else {
      checked = checked.filter((v) => v !== file);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));

    update();
  };

  grid.appendChild(card);
});

function update() {
  count.textContent = `${checked.length} / ${total}`;
}

update();

document.getElementById("reset").onclick = () => {
  if (!confirm("체크를 모두 초기화할까요?")) return;

  checked = [];

  localStorage.removeItem(STORAGE_KEY);

  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("checked");
  });

  update();
};
