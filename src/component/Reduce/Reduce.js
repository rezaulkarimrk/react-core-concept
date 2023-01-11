const nums = [25, 45, 34, 56, 40];

const Total= nums.reduce((sum, number) => sum+=number, 0 );

console.log(Total);
const friends = [{name: 'Rezaul Karim RK', mony: 250},
                 {name: 'Sabbir Rahman', mony: 258},
                 {name: 'Tarikul Islam', mony: 651},
                 {name: 'Hridoy Hossain', mony: 641}
];

const final = friends.reduce((sum, friend) => sum+friend.mony, 0);
console.log(final);