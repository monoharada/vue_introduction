// function searchUser(targetId) {
//   const userList = [{ id: 1, name: '鈴木' }, { id: 2, name: '田中' }, { id: 3, name: '太郎' }];

//   const targetUser = userList.find(hoge => hoge.id === targetId);
//   if (!targetUser) {
//     return null;
//   }
//   return targetUser.name;
// }

const date = new Date();
const year = date.getFullYear();

document.querySelector('#log').innerHTML = `今年は西暦${year}年です。`;
