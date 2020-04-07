#include<iostream>
#include<math.h>
using namespace std;
int maze[11][11]={0};
int mazeTrack(int m,int n){
    int arr[m][n];
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(i==0&&j==0){
                arr[i][j]=maze[i][j];
            }
            else if(i==0){
                arr[i][j]=arr[i][j-1]+maze[i][j];
            }
            else if(j==0){
                arr[i][j]=arr[i-1][j]+maze[i][j];
            }
            else{
                arr[i][j]=min(arr[i-1][j]+maze[i][j],arr[i][j-1]+maze[i][j]);
            }
        }
    }
    return arr[m-1][n-1];
}
int main(){
    int M=0;int N=0;
    cin>>M>>N;
    for(int i=0;i<M;i++){
        for(int j=0;j<N;j++){
            cin>>maze[i][j];
        }
    }
    cout<<mazeTrack(M,N)<<endl;
    return 0;
}