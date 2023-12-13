let i,j,n;
n=10;
let s="*",g=" ";
for(i=0;i<n;i++){
    console.log(g.repeat(i)+s.repeat(2*(n-i-1)+1));
}
for(i=1;i<n;i++){
    console.log(g.repeat(n-i-1)+s.repeat(2*i+1));
}