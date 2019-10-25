# Git 常用命令

##### 1. 下载某一指定分支的代码、上传到某个指定分支？

- pull操作

  1. 将<kbd>远程指定分支B1</kbd>拉取到<kbd>本地指定分支名B2</kbd>

     > git pull origin B1 : B2

  2. 将<kbd>远程指定分支B1</kbd>拉取到<kbd>本地当前分支B2</kbd>

     > git pull origin B1

  3. 将<kbd>与本地当前分支同名的远程分支B1</kbd>拉取到<kbd>本地当前分支B2</kbd>

     > git pull origin

- push操作

  1. 将<kbd>本地当前分支B2</kbd>推送到<kbd>远程指定分支B1</kbd>

     > git push origin B2 : B1

  2. 将<kbd>本地当前分支B2</kbd>推送到<kbd>与本地当前分支同名的远程分支B1</kbd>

     > git push origin B2
     >
     > 或
     >
     > git push --set-upstream origin B2(把本地分支与远程同名分支关联)
     >
     > git push origin（之后就可以用origin代替远程同名分支）

- branch的相关操作

  1. 查看分支

     > git branch

     ***号和绿色的表示的是当前所在分支**

  2. 创建分支

     > git branch 名字

  3. 切换分支

     > git checkout 分支名字

     项目可以有很多分支，所有操作和记录都保留在.git文件中保存，项目各分支的代码不一定一样，切换到不同分支显示不同分支的代码。

  4. 复制分支

     > git branch 新分支的名字  被复制的分支的名字

  5. 合并分支

     > git merge 被合并分支

     表示把某分支与当前分支合并

  6. 删除分支

     > git branch -d 分支名字

##### 2. 强制push到某一分支

> git push origin 分支名 -force

##### 3. 常见问题解决

- > error: failed to push some refs to '[https://github.com/bnq456/bnq456.github.io.git'](https://link.jianshu.com/?t=https://github.com/bnq456/bnq456.github.io.git')
  > hint: Updates were rejected because the tip of your current branch is behind
  > hint: its remote counterpart. Integrate the remote changes (e.g.
  > hint: 'git pull ...') before pushing again.

  > - 强制push
  > - 先pull再push
  > - 不想merge的话就先创建新的分支
  
- > error: RPC failed; curl 18 transfer closed with outstanding read data remaining
  >
  > fatal: The remote end hung up unexpectedly
  >
  > fatal: early EOF 
  >
  > fatal: index-pack failed

  > 解决：可能是缓存区溢出
  >
  > git config http.postBuffer 524288000
  >
  > 若还不行：
  >
  > git config --global http.lowSpeedLimit 0
  >
  > git config --global htpp.lowSpeedTime 999999
  >
  > 如果依旧失败的话
  >
  > 先浅层clone ：git clone --depth=1 .git
  >
  > 然后更新远程库到本地 ： git clone --unshallow

##### 4. 创建远程新分支

> git branch -a 查看所有分支
>
> git checkout -b newbranch 创建本地newbranch新分支
>
> git push --set-upstream origin newbranch 把本地newbranch分支推送到远程

