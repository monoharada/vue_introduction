/* eslint-disable import/no-extraneous-dependencies, no-console */

// モジュールを読み込む
const cpexec = require('child_process').exec; // コマンド実行
const mkdir = require('mkdirp'); // ディレクトリ作成
const notifer = require('node-notifer'); // デスクトップ通知
const path = require('path'); // パス文字列操作

// 拡張子ごとに入力元の基準ディレクトリを設定
const baseDir = {
    '.js' :'src/js',
    '.pcss': 'src/pcss',
    '.pug':'src/pug'
};

// 拡張子ごとに出力先の基準ディレクトリを設定
const outDir = {
    '.js' :'public/js',
    '.pcss': 'public/pcss',
    '.pug':'public'
}

// 引数からパスを取得
const srcPath = path.normalize(process.argv[2]);

// パスから拡張子を取得
const extSrc = path.extname(srcPath);

// 出力先のディレクトリ・パスを生成
const outPath = path.join(outDir[extStr], path.relative(baseDir[extStr], path.dirname(srcPath)));

// コンパイル・コマンドを生成
let cmdStr = '';

switch(extStr) {
  // 拡張子.js用コンパイル・コマンド
  case '.js':
    // Usage: webpack [options]
    cmdStr = 'webpack';
    break;
  // 拡張子.pcss用コンパイル・コマンド
  case '.pcss':
    // Usage: postcss [input.css] [options] [-o|--output output.css]
    cmdStr = 'postcss src pcss/style.pcss --map --output public/css/style.min.css';
    break;
  
  // 拡張子.pug用コンパイル・コマンド
  case '.pug':
    // Usage: pug [options] [dir|file ...]
    cmdStr = `pug --out ${outPath} --basedir ${baseDir[extSrc]} --pretty ${srcPath}`;
    break;

  // 登録外拡張子用メッセージ
  default:
    cmdStr = `echo Command for "${extStr}" is not registered.`;
}

// 出力先のディレクトリを作成
mkdir(outPath,(err) =>{
  // エラー処理
  if (err) {
    // デスクトップ通知を表示
    notifier.notify({
      title: 'An error has occured',
      message: 'Check the terminal for more information',
    });
    // コンソールにエラー・ログを表示
    console.log(err);
  }else {
  // コンパイル・コマンドを実行
  cpexec(cmdStr, (error, stdout) => {
    // エラー処理
    if(error) {
      // デスクトップ通知を表示
      notifier.notify({
        title: 'An error has occured',
        message: 'Check the terminal for more information',
      });
     // コンソールにエラー・ログを表示
     console.log(error);
    } else {
      // コンソールにログを表示
      console.log(stdout);
    }
  });
  }
});
