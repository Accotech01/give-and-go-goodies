
export interface Item {
  id: string;
  title: string;
  description: string;
  category: string;
  condition: string;
  location: string;
  imageUrl: string;
  logisticsCost: number;
  donorName: string;
  dateAdded: string;
}

export const items: Item[] = [
  {
    id: "1",
    title: "Wooden Dining Table",
    description: "Solid oak dining table in good condition. Can seat up to 6 people. Some minor scratches but structurally sound. Looking for a new home for this beautiful piece.",
    category: "Furniture",
    condition: "Good",
    location: "Seattle, WA",
    imageUrl: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpbmluZyUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    logisticsCost: 25.00,
    donorName: "Michael S.",
    dateAdded: "2023-04-02"
  },
  {
    id: "2",
    title: "Children's Books Collection",
    description: "Collection of 15 children's books in excellent condition. Ages 3-8. Titles include classic stories and educational content. My kids have outgrown these.",
    category: "Books",
    condition: "Excellent",
    location: "Portland, OR",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWxkcmVucyUyMGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    logisticsCost: 8.50,
    donorName: "Sarah J.",
    dateAdded: "2023-04-05"
  },
  {
    id: "3",
    title: "Winter Jacket - Size L",
    description: "Men's winter jacket, size large. Waterproof and very warm. Used for two seasons but still in great condition. Black color with reflective elements.",
    category: "Clothing",
    condition: "Good",
    location: "Chicago, IL",
    imageUrl: "https://images.unsplash.com/photo-1544923246-77307dd654cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwamFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    logisticsCost: 12.00,
    donorName: "David L.",
    dateAdded: "2023-04-01"
  },
  {
    id: "4",
    title: "Kitchen Blender",
    description: "Powerful kitchen blender, 1000W. Works perfectly fine, I just upgraded to a new one. Great for smoothies and soups. Includes all attachments.",
    category: "Appliances",
    condition: "Very Good",
    location: "Austin, TX",
    imageUrl: "https://images.unsplash.com/photo-1608187250932-7a4481d21389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsZW5kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    logisticsCost: 15.00,
    donorName: "Emily R.",
    dateAdded: "2023-04-08"
  },
  {
    id: "5",
    title: "Office Desk Chair",
    description: "Ergonomic office chair with adjustable height and lumbar support. Very comfortable for long working hours. Minor wear on the armrests but otherwise in great condition.",
    category: "Furniture",
    condition: "Good",
    location: "Denver, CO",
    imageUrl: "https://images.unsplash.com/photo-1589384376873-587c1e18d9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    logisticsCost: 20.00,
    donorName: "Alex T.",
    dateAdded: "2023-04-03"
  },
  {
    id: "6",
    title: "Baby Stroller",
    description: "Lightly used baby stroller in excellent condition. Folds easily and has good storage space underneath. Suitable for children up to 3 years old. Includes rain cover.",
    category: "Baby & Kids",
    condition: "Excellent",
    location: "San Diego, CA",
    imageUrl: "https://images.unsplash.com/photo-1591881279693-ab0f295c8b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMHN0cm9sbGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    logisticsCost: 30.00,
    donorName: "Jessica M.",
    dateAdded: "2023-04-07"
  }
];
