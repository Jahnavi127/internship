let i,j,n;
n=5;
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if(i==j || j==0 || i==n-1){
            process.stdout.write("*");
        }
        else{
            process.stdout.write(" ");
        }
    }
    console.log();
}