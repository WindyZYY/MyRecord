#include<iostream>
using namespace std;

int main(){
    int m;cin>>m;
    for(int j=0;j<m;j++){
        int n;
        cin>>n;
        if(n<=2){
            cout<<1<<endl;
            continue;
        }
        int *a=new int[n];
        a[0]=0;a[1]=1;a[2]=1;
        for(int i=3;i<=n;i++){
            a[n]=a[n-1]+a[n-2];
        }
        cout<<a[n]<<endl;
    }
    
}