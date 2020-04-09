// 一个环由个圈组成，把自然数1，2，…，N分别放在每一个圆内，数字的在两个相邻圈之和应该是一个素数。 注意：第一圈数应始终为1。

// input: N(0~20)

// output:输出格式如下所示的样品。每一行表示在环中的一系列圆号码从1开始顺时针和按逆时针方向。编号的顺序必须满足上述要求。打印解决方案的字典顺序。
// ————————————————
// 版权声明：本文为CSDN博主「STZG」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_43272781/java/article/details/82959089
#include<iostream>
#include<string>
using namespace std;

int N;
int vis[25];
int result[25];
int num;

int prime(int n){//判断是否为素数
    if(n<=1)
        return 0;
    int i;
    for(i=2;i*i<=n;i++){
        if(n%i==0)
            break;
    }
    if(i*i>n)
        return 1;
    return 0;
}

int check(int i,int step){
    if((vis[i]==0)&&prime(i+result[step-1])==1){
        if(step==N-1){
            if(!prime(i+result[0]))
                return 0;
        }
        return 1;
    }
    return 0;
}

void dfs(int step){
    if(step==N){
        cout<<result[0];
        for(int j=1;j<N;j++){
            cout<<" "<<result[j];
        }
        cout<<endl;
        return ;
    }
    int i;
    for(i=2;i<=N;i++){
        if(check(i,step)){
            vis[i]=1;
            result[step]=i;
            dfs(step+1);
            vis[i]=0;
        }
    }
}

int main(){
    while(scanf("%d",&N)!=EOF){
        num++;
        memset(result,0,sizeof(result));
        result[0]=1;
        printf("Case %d:\n", num);
        dfs(1);
        cout<<endl;
    }
}