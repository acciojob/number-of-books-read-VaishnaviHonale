const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
	let cnt = 0;
	for(i of library){
		if(i.readingStatus === false){
			cnt++;
		}
	}
	return cnt;
  // write your code here
};

// Do not change the code below

// alert(numberOfBooksRead());
