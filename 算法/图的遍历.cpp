#include<iostream>
#include<queue>
using namespace std;
struct node{
    int num;
    node* next;
};
int main(){
    int N;
    cin>>N;
    queue<int> myQ;
    if(N<=1){
        cout<<0<<endl;
        return 0;
    }
    vector<node> path;
    // int **a=(int **)malloc(sizeof(int*) * N);//分配所有行
    // for(int i=0;i<N;i++){//按行分配每一列
    //     a[i]=(int *)malloc(sizeof(int) * N);
    // }
    for(int i=0;i<N-1;i++){
        int j,k;
        cin>>j>>k;
        for(int l=0;l<path.size();l++){
            if(path[l].num==j){
                while(path[l])
                node* tmp;
                tmp->num=k;
                tmp->next=NULL;
                
                
            }else{
                node* tt;
                tt->num=j;
                node* t2;
                t2->num=k;t2->next=NULL;
                tt->next=t2;
            }
        }
    }
    myQ.push(0);
    int cnt=0;
    int e=0;
    while(!myQ.empty()){
        myQ.pop();
        for(int j=0;j<N;j++){
            if(a[e][j]==1){
                myQ.push(j);
            }
        }
        e=myQ.front();
        cnt++;
    }
    cout<<cnt<<endl;
}