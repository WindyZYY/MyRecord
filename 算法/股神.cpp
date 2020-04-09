#include<iostream>
using namespace std;

int getValue(int n){
    if(n==1)
    return 1;
    int tmp=1;
    int k=n-1;
    int i=1;
    while(k>0){
        if(k<i){
            tmp+=k;
            break;
        }
        tmp+=i;//上涨
        k-=i;
        if(k>=1){
            tmp-=1;//下跌
            k-=1;
        }
        i++;
    }
    return tmp;
};

int main(){
    int n;
    while(cin>>n){
        cout<<getValue(n)<<endl;
    }
}