<?php
if($_POST['text1'] != '') {
  $json = file_get_contents('../data/content_2018.json');
  $records = json_decode($json, true);
  $k = false;

  for ($j=0; $j<count($records); $j++){
    if ($records[$j]['title'] == $_POST['text1']){
      $k = true;
    }
  }
  if($k) {
    echo 'このタイトルは使われています。';
    echo '<a href="' . $_SERVER['HTTP_REFERER'] . '">前に戻る</a>';
  }else {

    if(isset($_POST['text2'])){

      for ($i=0; $i<count($_FILES['userfile']['name']); $i++) {
        $file_ext = pathinfo($_FILES["userfile"]["name"][$i], PATHINFO_EXTENSION);
        $newfilename = date("YmdHis")."-".$_FILES['userfile']['name'][$i];
        if (/*FileExtensionGetAllowUpload($file_ext) && */ is_uploaded_file($_FILES["userfile"]["tmp_name"][$i])) {
          if(move_uploaded_file($_FILES["userfile"]["tmp_name"][$i], "../img/2018/".$newfilename)) {
            $json = file_get_contents('../data/content_2018.json');
            $records = json_decode($json, true);
            
            $records[] = [
                'title' => $_POST['text1'],
                'image' => "img/2018/{$newfilename}",
                'category' => $_POST['text2']
            ];
            
            $out_json = json_encode($records, JSON_UNESCAPED_UNICODE);
            
            file_put_contents("../data/content_2018.json", $out_json, LOCK_EX);
            echo $_FILES["userfile"]["name"][$i] . "をアップロードしました。<br>";
            echo "ページを更新してください。";
          } else {
            echo "ファイルをアップロードできません。<br>";
          }
        } else {
          echo "ファイルが選択されていません。<br>";
          echo '<a href="' . $_SERVER['HTTP_REFERER'] . '">前に戻る</a>';
        }
      }
    } else{
      echo 'カテゴリーが選択されていません。<br>';
      echo '<a href="' . $_SERVER['HTTP_REFERER'] . '">前に戻る</a>';
    }
  }

} else {
  echo 'タイトルが入力されていません。<br>';
  echo '<a href="' . $_SERVER['HTTP_REFERER'] . '">前に戻る</a>';
}
  //アップロードできるファイルに拡張子の制限をかけたい時
  function FileExtensionGetAllowUpload($ext){
    $allow_ext = array("gif","jpg","jpeg","png","eps");
    foreach($allow_ext as $v){
      if ($v === $ext){
        return 1;
      }
    }
    return 0;
  }
?>