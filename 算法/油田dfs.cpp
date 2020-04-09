#include<iostream>
#include<string>
using namespace std;

char a[105][105];
int n,m,result;
int dir[8][2]={{1,0},{-1,0},{0,1},{0,-1},{1,1},{-1,-1},{1,-1},{-1,1}};

int check(int x,int y){
    if(x>=0&&x<m&&y>=0&&y<m&&a[x][y]=='@'){
        return 1;
    }
    return 0;
}

int dfs(int x,int y){
    int i,xx,yy;
    if(check(x,y)){
        a[x][y]='.';//统计之后标记，且不用恢复,否则会重复
        for(int i=0;i<8;i++){
            xx=x+dir[i][0];
            yy=y+dir[i][1];
            dfs(xx,yy);//一次检查8个方向(相邻为同一油藏)
        }
        return 1;
    }
    return 0;
}

int main(){
    int i,j;
    while(cin>>m>>n){
        if(m==0&&n==0){
            break;
        }
        result=0;
        memset(a,0,sizeof(a));
        for(i=0;i<m;i++){
            cin>>a[i];
        }
        for(i=0;i<m;i++){
            for(j=0;j<n;j++){
                if(dfs(i,j)){
                    result++;
                }
            }
        }
        cout<<result<<endl;
    }
    return 0;
}