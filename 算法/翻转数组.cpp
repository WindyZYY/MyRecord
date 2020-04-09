// 给定一个长度为n的整数数组a，元素均不相同，问数组是否存在这样一个片段，只将该片段翻转就可以使整个数组升序排列。其中数组片段[l,r]表示序列a[l], a[l+1], ..., a[r]。原始数组为
// a[1], a[2], ..., a[l-2], a[l-1], a[l], a[l+1], ..., a[r-1], a[r], a[r+1], a[r+2], ..., a[n-1], a[n]，
// 将片段[l,r]反序后的数组是
// a[1], a[2], ..., a[l-2], a[l-1], a[r], a[r-1], ..., a[l+1], a[l], a[r+1], a[r+2], ..., a[n-1], a[n]。
#include<iostream>
#include<vector>
using namespace std;

int main(){
    int n;
    cin>>n;
    int *a=new int[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    int len=n;
    for(int i=0;i<len-1;i++){
        if(i==len-2&&a[i]<=a[i+1]){
            cout<<"yes"<<endl;
            return 0;
        }
        if(a[i]>a[i+1]){
            for(int j=i;j<len;j++){
                if(j==len-1){
                    if(i==0||(i!=0&&a[j]>=a[i-1])){
                        cout<<"yes"<<endl;
                        return 0;
                    }else{
                        cout<<"no"<<endl;
                        return 0;
                    }
                }
                if(a[j]<a[j+1]){
                    if(i==0||(i!=0&&a[j]>=a[i-1])){
                        if(a[i]<=a[j+1]){
                            cout<<"yes"<<endl;
                            return 0;
                        }else{
                            cout<<"no"<<endl;
                            return 0;
                        }
                    }else{
                        cout<<"no"<<endl;
                        return 0;
                    }
                }
            }
        }
    }
    cout<<"no"<<endl;
}