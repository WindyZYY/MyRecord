#include<iostream>
#include<queue>
using namespace std;
int main(){
    int N;
    cin>>N;
    int n;
    for(int i=0;i<N;i++){
        cin>>n;
        int p=2;
        int *a=new int[n+1];
        for(int k=0;k<n+1;k++){
            a[k]=1;
        }
        int tag=1;
        int nn=n;
        while(nn>3){
            for(int j=1;j<=n;j++){
                if(nn<=3)
                break;
                if(a[j]&&(j%p==0)){
                    a[j]=0;
                    nn--;
                }
                if(a[j]){
                    tag=j;
                }
            }
            p=5-p;
        }
        for(int l=1;l<n+1;l++){
            if(a[l]&&l!=tag){
                cout<<l<<" ";
            }
            if(a[l]&&l==tag){
                cout<<l<<endl;
            }
        }
    }
}