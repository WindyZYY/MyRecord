// 问题：在一个给定形状的棋盘（形状可能是不规则的）上面摆放棋子，棋子没有区别。要求摆放时任意的两个棋子不能放在棋盘中的同一行或者同一列，请编程求解对于给定形状和大小的棋盘，摆放k个棋子的所有可行的摆放方案C。

// input： 输入含有多组测试数据。 每组数据的第一行是两个正整数，n k，用一个空格隔开，表示了将在一个n*n的矩阵内描述棋盘，以及摆放棋子的数目。 n <= 8 , k <= n 当为-1 -1时表示输入结束。 随后的n行描述了棋盘的形状：每行有n个字符，其中 # 表示棋盘区域， . 表示空白区域（数据保证不出现多余的空白行或者空白列）。

// output：对于每一组数据，给出一行输出，输出摆放的方案数目C （数据保证C<2^31）。
// ————————————————
// 版权声明：本文为CSDN博主「STZG」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_43272781/java/article/details/82959089
#include<iostream>
#include<string>
using namespace std;

int n,k,ans;
char str[10][10];
int vis[100];

void dfs(int r,int k){
    if(k==0){//棋子放完
        ans++;
        return ;
    }
    for(int i=r;i<n;i++){//从放过旗子的下一行开始搜索，保证行不重复
        for(int j=0;j<n;j++){
            if(str[i][j]=='.'||vis[j]==1){//确保列不重复
                continue;
            }
            vis[j]=1;
            dfs(i+1,k-1);
            vis[j]=0;
        }
    }
}

int main(){
    while(1){
        cin>>n>>k;
        if(n==-1&&k==-1){
            break;
        }
        memset(str,'\0',sizeof(str));
        memset(vis,0,sizeof(vis));
        ans=0;

        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                cin>>str[i][j];
            }
        }
        dfs(0,k);
        cout<<ans<<endl;
    }
    return 0;
}