#include<iostream>
#include<string>
#include<math.h>
using namespace std;

const int MAX=1001;
int maxlen[MAX][MAX];

int getlen(string s1, string s2){
    int len1=s1.size();
    int len2=s2.size();
    for(int i=0;i<len1;i++){
        maxlen[i][0]=0;
    }
    for(int j=0;j<len2;j++){
        maxlen[0][j]=0;
    }
    for(int i=1;i<=len1;i++){
        for(int j=1;j<=len2;j++){
            if(s1[i-1]==s2[j-1]){
                maxlen[i][j]=maxlen[i-1][j-1]+1;
            }else{
                maxlen[i][j]=max(maxlen[i-1][j],maxlen[i][j-1]);
            }
        }
    }
    return maxlen[len1][len2];
}

int main(){
    string s;
    cin>>s;
    int len=s.size();
    if(len==1){
        cout<<1<<endl;
        return 0;
    }
    string s2=s;
    reverse(s2.begin(),s2.end());
    int max_length=getlen(s,s2);
    cout<<len-max_length<<endl;
}
