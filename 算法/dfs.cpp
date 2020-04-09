// int check(argu){
//     if(true){
//         return 1;
//     }
//     return 0;
// }
// void dfs(int step){
//     判断边界{
//         相应操作
//     }
//     尝试每一种可能{
//         满足check条件
//         标记
//         继续下一步dfs(step+1)
//         恢复初始状态（回溯的时候要用到）
//     }
// }

//全排列问题(打印结果)
#include<iostream>
using namespace std;
#include<string>
int n;
char a[15];
char re[15];
int vis[15];
//假设有n个字符要排列，把他们依次放到n个箱子中
//首先检查箱子是否为空，手中还有什么字符，把他们放进并标记
//放完一次要恢复初始状态，当到n+1个享资时，一次排列已经结束
void dfs(int step){
    int i;
    if(step==n+1){
        for(int i=1;i<=n;i++){
            cout<<re[i];
        }
        cout<<endl;
        return ;
    }
    for(i=1;i<=n;i++){
        if(vis[i]==0){
            re[step]=a[i];
            vis[i]=1;//标记
            dfs(step+1);
            vis[i]=0;
        }
    }
    return ;
}
int main(){
    int T;
    cin>>T;//T组数据
    while(T--){
        memset(a,0,sizeof(a));
        memset(vis,0,sizeof(vis));
        scanf("%s",a+1);
        n=strlen(a+1);
        dfs(1);
    }
}

