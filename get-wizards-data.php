<?php

  $artifactKindArray = array(
    id10 => 'fireball', 
    id11 => 'footwear',
    id12 => 'levitation',
  );

  $artifactArray = array(
    id10 => array(
      'name' => 'triple_fireballs',
      'description' => 'Выпускает по три фаербола в разные стороны',
      'kind' => $artifactKindArray[0]
    ),
    id11 => array(
      'name'=> 'smaller_fireballs',
      'description'=> 'Выпускает фаерболы меньшего размера, но летящие в два раза быстрее, чем обычные',
      'kind'=> $artifactKindArray[0]
      ),
    id12 => array(
      'name'=> 'bigger_fireballs',
      'description'=> 'Выпускает увеличенные в два раза фаерболы, которые летают в полтора раза медленнее',
      'kind'=> $artifactKindArray[0]
    ),
    id13 => array(
      'name'=> 'metal_boots',
      'description'=> 'Металлические сапоги — замедляют',
      'kind'=> $artifactKindArray[1]
    ),
    id14 => array(
      'name'=> 'flying_boots',
      'description'=> 'Летающие сапоги — придают скорости',
      'kind'=> $artifactKindArray[1]
    ),
    id15 => array(
      'name'=> 'converse',
      'description'=> 'Кеды »Конверс« — не делают ничего, просто придают крутой вид',
      'kind'=> $artifactKindArray[1]
    ),
    id16 => array(
      'name' => 'balloon',
      'description' => 'Крылья — позволяют летать без ограничений. При подъеме не происходит автоматического спуска. Чтобы спуститься, нужно нарочно направить волшебника вниз',
      'kind' => $artifactKindArray[2]
    ),
    id17 => array(
      'name' => 'wings',
      'description' => 'Воздушный шарик — увеличивает скорость подъема и уменьшает скорость спуска',
      'kind' => $artifactKindArray[2]
    ),
    id18 => array(
      'name'=> 'weights',
      'description'=> 'Утяжелители на ноги — уменьшают скорость подъема и увелилчивают скорость спуска',
      'kind'=> $artifactKindArray[2]
    ),
  );

  $wizards = array(
    id10 => array(
      name => 'Дамблдор',
      colorCoat => 'rgb(241, 43, 107)',
      colorEyes => 'yellow',
      colorFireball => '#5ce6c0',
      artifacts => array(
        $artifactArray[id16],
        $artifactArray[id17],
        $artifactArray[id10],
        $artifactArray[id11],
        $artifactArray[id12],
      ),
    ),
    id11 => array(
      name => 'Волдеморт',
      colorCoat => 'rgb(215, 210, 55)',
      colorEyes => 'black',
      colorFireball => '#30a8ee',
      artifacts => array(
        $artifactArray[id13],
        $artifactArray[id16],
        $artifactArray[id18],
      ),
    ),
    id12 => array(
      name => 'Доктор Стрендж',
      colorCoat => 'rgb(146, 100, 161)',
      colorEyes => 'yellow',
      colorFireball => '#ee4830',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id14],
        $artifactArray[id16],
        $artifactArray[id10],
        $artifactArray[id12],
      ),
    ),
    id13 => array(
      name => 'Гарри Поттер',
      colorCoat => 'rgb(101, 137, 164)',
      colorEyes => 'red',
      colorFireball => '#ee4830',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id14],
        $artifactArray[id13],
        $artifactArray[id16],
        $artifactArray[id18],
        $artifactArray[id10],
        $artifactArray[id12],
      ),
    ),
    id14 => array(
      name => 'Старик Хоттабыч',
      colorCoat => 'rgb(0, 0, 0)',
      colorEyes => 'blue',
      colorFireball => '#30a8ee',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id14],
        $artifactArray[id16],
        $artifactArray[id18],
        $artifactArray[id17],
        $artifactArray[id10],
        $artifactArray[id11],
        $artifactArray[id12],
      ),
    ),
    id15 => array(
      name => 'Дэвид Блэйн',
      colorCoat => 'rgb(215, 210, 55)',
      colorEyes => 'blue',
      colorFireball => '#e848d5',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id14],
        $artifactArray[id13],
        $artifactArray[id16],
        $artifactArray[id18],
        $artifactArray[id17],
        $artifactArray[id10],
        $artifactArray[id12],
      ),
    ),
    id16 => array(
      name => 'Гарри Гудини',
      colorCoat => 'rgb(0, 0, 0)',
      colorEyes => 'yellow',
      colorFireball => '#e6e848',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id14],
        $artifactArray[id18],
        $artifactArray[id11],
        $artifactArray[id12],
      ),
    ),
    id17 => array(
      name => 'Григорий Распутин',
      colorCoat => 'rgb(241, 43, 107)',
      colorEyes => 'blue',
      colorFireball => '#5ce6c0',
      artifacts => array(
        $artifactArray[id14],
        $artifactArray[id13],
        $artifactArray[id16],
        $artifactArray[id18],
        $artifactArray[id12],
      ),
    ),
    id18 => array(
      name => 'Саурон',
      colorCoat => 'rgb(101, 137, 164)',
      colorEyes => 'blue',
      colorFireball => '#e848d5',
      artifacts => array(
        $artifactArray[id14],
        $artifactArray[id16],
        $artifactArray[id18],
        $artifactArray[id17],
        $artifactArray[id11],
        $artifactArray[id12],
      ),
    ),
    id19 => array(
      name => 'Антон Городецкий',
      colorCoat => 'rgb(56, 159, 117)',
      colorEyes => 'yellow',
      colorFireball => '#e848d5',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id13],
        $artifactArray[id16],
        $artifactArray[id18],
        $artifactArray[id17],
        $artifactArray[id10],
        $artifactArray[id11],
      ),
    ),
    id20 => array(
      name => 'Алистер Кроули',
      colorCoat => 'rgb(146, 100, 161)',
      colorEyes => 'black',
      colorFireball => '#ee4830',
      artifacts => array(
        $artifactArray[id14],
        $artifactArray[id13],
        $artifactArray[id18],
        $artifactArray[id17],
        $artifactArray[id10],
        $artifactArray[id11],
      ),
    ),
    id21 => array(
      name => 'Гендальф Белый',
      colorCoat => 'rgb(215, 210, 55)',
      colorEyes => 'yellow',
      colorFireball => '#30a8ee',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id14],
        $artifactArray[id13],
        $artifactArray[id16],
        $artifactArray[id17],
        $artifactArray[id11],
        $artifactArray[id12],
      ),
    ),
    id22 => array(
      name => 'Фея Крестная',
      colorCoat => 'rgb(215, 210, 55)',
      colorEyes => 'green',
      colorFireball => '#5ce6c0',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id14],
        $artifactArray[id13],
        $artifactArray[id16],
        $artifactArray[id17],
        $artifactArray[id10],
        $artifactArray[id11],
      ),
    ),
    id23 => array(
      name => 'Ведьма Пустоши',
      colorCoat => 'rgb(56, 159, 117)',
      colorEyes => 'black',
      colorFireball => '#5ce6c0',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id14],
        $artifactArray[id13],
        $artifactArray[id16],
        $artifactArray[id17],
        $artifactArray[id10],
        $artifactArray[id11],
      ),
    ),
    id24 => array(
      name => 'Мерлин',
      colorCoat => 'rgb(101, 137, 164)',
      colorEyes => 'blue',
      colorFireball => '#30a8ee',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id14],
        $artifactArray[id16],
        $artifactArray[id18],
        $artifactArray[id17],
        $artifactArray[id11],
        $artifactArray[id12],
      ),
    ),
    id25 => array(
      name => 'Гендальф Серый',
      colorCoat => 'rgb(56, 159, 117',
      colorEyes => 'red',
      colorFireball => '#e6e848',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id14],
        $artifactArray[id13],
        $artifactArray[id16],
        $artifactArray[id18],
        $artifactArray[id17],
        $artifactArray[id10],
        $artifactArray[id11],
        $artifactArray[id12],
      ),
    ),
    id26 => array(
      name => 'Джинни',
      colorCoat => 'rgb(241, 43, 107)',
      colorEyes => 'black',
      colorFireball => '#30a8ee',
      artifacts => array(
        $artifactArray[id15],
        $artifactArray[id18],
        $artifactArray[id10],
        $artifactArray[id11],
        $artifactArray[id12],
      ),
    ),
  );
  
  echo json_encode($wizards);
  // echo json_encode($list);

?>