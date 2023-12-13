let i,j,n;
n=5;
let s="*",g=" ";
let r;
for(i=0;i<n;i++){
    r=g.repeat(n-i)+s.repeat(2*i+1);
    console.log(r);
}