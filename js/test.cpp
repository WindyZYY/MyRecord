// #include<iostream>
// using namespace std;

// int gcd(int a,int b){
//     int c=a<b?a:b;
//     for(int i=(c%2==0)?c/2:(c-1)/2;i>0;i--){
//         if(a%c==0&&b%c==0)
//             return i;
//     }
//     return 1;
// }

// int main(){
//     int n;
//     cin>>n;
//     int max=0;
//     if(gcd(n,n-1)==1){
//         max=n*(n-1)-1;
//         cout<<max<<endl;
//         return 0;
//     }
//     for(int k=n;k>1;k--){
//         int j=k-1;
//         while(j>0){
//             int gc=gcd(j,k);
//             if(j*k/gc-gc>max){
//                 max=j*k/gc-gc;
//             }
//             j--;
//         }
//     }
//     cout<<max<<endl;
// }

#include<iostream>
#include<algorithm>
using namespace std;
int main(){
    int n;
    long long a[51];
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    int max=n+1;
    int cnt=0;
    while(max>=n){
        sort(a,a+n);
        if(a[n-1]<n-cnt){
            cout<<cnt<<endl;
            return 0;
        }else{
            a[n-1]=a[n-1]-n-1;
            cnt++;
        }
    }
}
