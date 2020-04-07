#include<iostream>
#include<algorithm>
using namespace std;
int main(){
    int flag=1;
    while(flag){
        int price;
        cin>>price;
        if(price==0){
            break;
        }
        int num;
        cin>>num;
        int *coins=new int[num];
        int count=0;
        int size=num;
        while(num--){
            cin>>coins[count];
            count++;
        }
        sort(coins,coins+size);

        int *F=new int[price+1];
        for(int i=0;i<=price;i++){
            F[i]=price+1;//初始化值
        }
        F[0]=0;
        for(int j=0;j<=price;j++){
            for(int k=0;k<size;k++){
                if(j<coins[k]){
                    break;
                }else{
                    F[j]=min(F[j-coins[k]]+1,F[j]);
                }
            }
        }
        if(F[price]==price+1){
            cout<<"impossible"<<endl;
        }else{
            cout<<F[price]<<endl;
        }
    }
}