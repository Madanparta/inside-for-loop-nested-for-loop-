// 1.

// let num = 4;

// for(let i=1; i<=num; i++){
//   let star = ''
//   for(let j=1; j<=num+1; j++){
//     star=star+" $"
//   }
//   console.log(star)
// }


// 2.
// let n = 5;

// for(let i=1; i<=n; i++){
//   let star = ' '
//   for(let j=1; j<=i; j++){
//     star = star+ "  "
//   }
//   for(let k=i; k<=n; k++){
//     star+=" $"
//   }
//   console.log(star)
// }

// 3.

// let n= 5

// for(let i=1; i<=n; i++){
//   let star = ' '
//   for(let j=i; j<=n; j++){
//     star+="  "
//   }
//   for(let k=1; k<=i; k++){
//     star+=" $"
//   }
//   for(let l=1; l<i; l++){
//     star+=" $"
//   }
//   console.log(star)
// }

// 4.

// let n= 5

// for(let i=1; i<n; i++){
//   let star = ' '
//   for(let j=i; j<=n; j++){
//     star+="  "
//   }
//   for(let k=1; k<=i; k++){
//     star+=" $"
//   }
//   for(let l=1; l<i; l++){
//     star+=" $"
//   }
//   console.log(star)
// }
// for(let i=1; i<=n; i++){
//   let star = ' '
//   for(let j=1; j<=i; j++){
//     star+="  "
//   }
//   for(let k=i; k<=n; k++){
//     star+=" $"
//   }
//   for(let l=i; l<n; l++){
//     star+=" $"
//   }
//   console.log(star)
// }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 1 row and coloms.

// let n=5

// for(let i=1; i<=n; i++){
//   let star= ' '
//   for(let j=1; j<=n; j++){
//     if(i==1 || i==n || j==1 || j==n){
//       star+=" $"
//     }else{
//       star+="  "
//     }
//   }
//   console.log(star)
// }


// 2

// let n=5

// for(let i=1; i<=n; i++){
//   let star= ' '
//   for(let j=1; j<=n; j++){
//     if(j==i || j+i == n+1){
//       star+=" $"
//     }else{
//       star+="  "
//     }
//   }
//   console.log(star)
// }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>not working
// 3

// let n=5

// for(let i=1; i<=n; i++){
//   let star= ' '
//   for(let j=1; j<=n; j++){
//     if( i==n/2+1 || j==n/2+1){
//       star+=" $"
//     }else{
//       star+="  "
//     }
//   }
//   console.log(star)
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>not working 3rd one....>>>>>>>>

// 4.

// let n=5

// for(let i=1; i<=n; i++){
//   let star = ' '
//   for(let j=1; j<=i; j++){
//     if(j==1 || i==n || j==i){
//       star+=" $"
//     }else{
//       star+="  "
//     }
//   }
//   console.log(star)
// }

// 5

// let n = 5

// for(let i=1; i<=n; i++){
//   let star= ' '
//   for(let j=i; j<=n; j++){
//     if(i==1 || j==n || i==j){
//       star+=" $"
//     }else{
//       star+="  "
//     }
//   }
//   console.log(star)
// }



// 6.

// let n =5

// for(let i=1; i<=n; i++){
//   let star= ' '
//   for(let j=i; j<=n; j++){
//     star+="  "
//   }
//   for(let k=1; k<i; k++){
//     if(i==n || k==1){
//       star+=" $"
//     }else{
//       star+="  "
//     }
//   }
//   for(let l=1; l<=i; l++){
//     if(i==n || l==i){
//       star+=" $"
//     }else{
//       star+="  "
//     }
//   }
//   console.log(star)
// }


// 7.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>out put not corrects..
let n = 5

for(let i=1; i<n; i++){
  let star = ' '
  for(let j=i; j<=n; j++){
    star+="  "
  }
  for(let k=1; k<=i; k++){
    if(k==1){
      star+=" $"
    }else{
      star+="  "
    }
  }
  for(let l=1; l<i; l++){
    if(l==i){
      star+=" $"
    }else{
      star+="  "
    }
  }
  console.log(star)
}
for(let i=1; i<=n; i++){
  let star = ' '
  for(let j=1; j<=i; j++){
    star+="  "
  }
  for(let k=i; k<=n; k++){
    if(k==i){
      star+=" $"
    }else{
      star+="  "
    }
  }
  for(let l=i; l<n; l++){
    if(l==n){
      star+=" $"
    }else{
      star+="  "
    }
  }
  console.log(star)
}