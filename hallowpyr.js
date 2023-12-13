let i,j,n;
n=10;
let s="*",g=" ";
let r;
console.log(g.repeat(n+1)+s);
for(i=0;i<n-1;i++){
    r=g.repeat(n-i)+s+g.repeat(2*i+1)+s;
    console.log(r);
}
console.log(g+s.repeat(2*n+1));