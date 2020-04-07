#include<iostream>
#include<stack>
using namespace std;

int main(){
    string str;
    cin>>str;
    int len=str.length;
    stack<string> tmp;
    string s="";
    for(int i=len-1;i>0;i--){
        if(str[i]==' '){
            continue;
        }
        if(str[i]==')')
        {
            tmp.push(str[i]);
            // s=s+str[i];
            // if(str[i-1]=='('){
            //     s=s+str[i-1];
            //     tmp.push(s);
            //     s="";
            // }else{
            //     tmp.push(s);
            //     s="";
            // }
        }
        if(str[i]=='('){
            if(tmp.top()==')'){
                s=s+tmp.top();
                tmp.pop();
                s=s+str[i];
            } 
        }
    }
    
}