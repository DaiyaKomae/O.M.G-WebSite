<?php
    $json = file_get_contents('../data/content_daily_life.json');
    $records = json_decode($json, true);
    
    for ($i=0; $i<count($records); $i++) {
        if ($records[$i]['title'] == $_POST['text1']) {
            if (unlink(str_replace('img/daily_life/','../img/daily_life/',$records[$i]['image']))){
                echo $records[$i]['image'].'の削除に成功しました。';
              }else{
                echo $records[$i]['image'].'の削除に失敗しました。';
              }
            unset($records[$i]['title'], $records[$i]['image'], $records[$i]['category']);
        }
    }
    $records = array_filter($records);
    $records = array_values($records);

    $out_json = json_encode($records, JSON_UNESCAPED_UNICODE);
    
    file_put_contents("../data/content_daily_life.json", $out_json, LOCK_EX);
?>