// Assuming you have this data, you can store it in an array.
let data = [
  { ticket: "INC0001", name: "Thuy Doan" },
  { ticket: "INC0003", name: "Dawn Torralba" },
  { ticket: "INC0005", name: "Emmanuel Dizon" },
  { ticket: "INC0006", name: "Joanne Santos" },
  { ticket: "INC0007", name: "Airine Acebron" },
  { ticket: "INC0008", name: "Kylie Nguyen" },
  { ticket: "INC0009", name: "Richard Canlas" },
  { ticket: "INC0010", name: "Tim Huynh" },
  { ticket: "INC0011", name: "Paul Le" },
  { ticket: "INC0012", name: "Nam Nguyen" },
  { ticket: "INC0013", name: "Jenn Le" },
  { ticket: "INC0014", name: "Kay Huynh" },
  { ticket: "INC0015", name: "Lucas Nghe" },
  { ticket: "INC0016", name: "Josie Nguyen" },
  { ticket: "INC0017", name: "Kim Duong" },
  { ticket: "INC0018", name: "Vippi Nguyen" },
  { ticket: "INC0019", name: "Emma Nguyen" },
  { ticket: "INC0020", name: "Burrin Truong" },
  { ticket: "INC0021", name: "Alice Nguyen" },
  { ticket: "INC0022", name: "Wilson Nguyen" },
  { ticket: "INC0023", name: "Ivy Nguyen" },
  { ticket: "INC0024", name: "William Dao" },
  { ticket: "INC0025", name: "Emmy Trinh" },
  { ticket: "INC0026", name: "Sebastien Thillaye" },
  { ticket: "INC0028", name: "Leon Nguyen" },
  { ticket: "INC0029", name: "Dandy Le" },
  { ticket: "INC0030", name: "Eric Le" },
  { ticket: "INC0031", name: "Ulee Nguyen" },
  { ticket: "INC0032", name: "Amy Nguyen" },
  { ticket: "INC0033", name: "Tom Do" },
  { ticket: "INC0034", name: "Vi Doan" },
  { ticket: "INC0035", name: "Sophie Huynh" },
  { ticket: "INC0036", name: "Tracy Nguyen" },
  { ticket: "INC0037", name: "Zen Nguyen" },
  { ticket: "INC0038", name: "Hallony Vuong" },
  { ticket: "INC0039", name: "Tristan Nguyen" },
  { ticket: "INC0040", name: "Tony Nguyen" },
  { ticket: "INC0041", name: "Helen Le" },
  { ticket: "INC0042", name: "Peter Nguyen" },
  { ticket: "INC0043", name: "Hazel Bui" },
  { ticket: "INC0044", name: "Mina Pham" },
  { ticket: "INC0045", name: "Windy Nguyen" },
  { ticket: "INC0046", name: "Dan Huynh" },
  { ticket: "INC0047", name: "Daisy Le" },
  { ticket: "INC0048", name: "Serena Ha" },
  { ticket: "INC0050", name: "Quang Doan" },
  { ticket: "INC0051", name: "Karen Nguyen" },
  { ticket: "INC0052", name: "Ken Luu" },
  { ticket: "INC0054", name: "Evelyn Tu" },
  { ticket: "INC0055", name: "Lucia Le" },
  { ticket: "INC0056", name: "David Lam" },
  { ticket: "INC0058", name: "Heulwen Nguyen" },
  { ticket: "INC0060", name: "Hana Do" },
  { ticket: "INC0062", name: "Aris To" },
  { ticket: "INC0063", name: "Grainne Nguyen" },
  { ticket: "INC0064", name: "Shawn Nguyen" },
  { ticket: "INC0065", name: "Wayne Tran" },
  { ticket: "INC0066", name: "Ethan Pham" },
  { ticket: "INC0067", name: "Phoebe Nguyen" },
  { ticket: "INC0068", name: "Bruce Nguyen" },
  { ticket: "INC0069", name: "Lynn Pham" },
  { ticket: "INC0071", name: "Kayden Ho" },
  { ticket: "INC0072", name: "Ann Tran" },
  { ticket: "INC0073", name: "Clara Vo" },
  { ticket: "INC0074", name: "Andrew Huynh" },
  { ticket: "INC0078", name: "Hanna Huynh" },
  { ticket: "INC0079", name: "Yume Dang" },
  { ticket: "INC0080", name: "Tora Le" },
  { ticket: "INC0081", name: "Sam Nguyen" },
  { ticket: "INC0076", name: "Rachel Truong" },
  { ticket: "INC0082", name: "Natalie Nguyen" },
];

// Function to get the name based on the ticket
function getNameByTicket(ticketCode) {
  for (let item of data) {
    if (item.ticket === ticketCode) {
      return item.name;
    }
  }
  return "Ticket not found";
}

// Function to handle button click
function showName() {
  var ticketInput = document.getElementById("ticketInput").value;
  var nameOutput = getNameByTicket(ticketInput);
  document.getElementById("result").innerText = nameOutput;
}
