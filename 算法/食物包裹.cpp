#include<iostream>
#include<vector>
using namespace std;
int main(){
    int n=0;
    int m=0;
    cin>>n>>m;
    vector<int> a;
    int k=0;
    for(int i=0;i<m;i++){
        cin>>k;
        a.push_back(k);
    }
    sort(a.begin(),a.end());
    int l[100]={0};
    for(int i=0;i<a.size();i++){
        l[a[i]]++;
    }
    sort(l,l+100);
    vector<int> h;
    for(int j=0;j<100;j++){
        if(l[j]>0){
            h.push_back(l[j]);
        }
    }
    int g=m/n;//最多的天数
    int len=h.size();
    int b=0;int flag=0;
    int d=n;
    for(int j=g;j>0;j--){
        for(int c=len-1;c>=0;c--){
            b=h[c]/j;//支持几个人
            d=d-b;
            if(d<=0){//足够n个人
                cout<<j<<endl;
                flag=1;
                break;
            }
        }
        if(flag==1){
            break;
        }else{
            d=n;
        }
    }
    if(flag==0){
        cout<<0<<endl;
    }
    return 0;
}
