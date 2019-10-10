$(function () {

    $('#upload').colorbox({
        iframe:true,  
        innerWidth:600,   //幅の指定
        innerHeight:400, //高さの指定
        title: false
    });

    $('#delete').colorbox({
        iframe:true,  
        innerWidth:300,   //幅の指定
        innerHeight:200, //高さの指定
        title: false
    });

    $('#gallery').each(function () {
        var $container = $(this),
            $loadMoreButton = $('#load-more'),
            $filter = $('#gallery-filter'),
            addItemCount = 16,
            added = 0,
            allData = [],
            filteredData = [];

        $container.masonry({
            columnWidth: 230,
            gutter: 10,
            itemSelector: '.gallery-item'
        });

        $.getJSON('./data/content_2018.json', initGallery);

        function initGallery (data) {
            allData = data;
            filteredData = allData;
            addItems();
            $loadMoreButton.on('click', addItems);
            $filter.on('change', 'input[type="radio"]', filterItems);
        }

        function addItems (filter) {
            var elements = [],
                sliceData = filteredData.slice(added, added + addItemCount);

            $.each(sliceData, function (i, item) {
                var itemHTML = 
                        '<li class="gallery-item is-loading">' +
                            '<a href="' + item.image + '">' +
                                '<img src="' + item.image + '" alt="">' +
                                '<span class="caption">' +
                                    '<span class="inner">' +
                                        '<b class="title">' + item.title + '</b>' +
                                    '</span>' +
                                '</span>' +
                            '</a>' +
                        '</li>';
                elements.push($(itemHTML).get(0));
            });

            $container
                .append(elements)
                .imagesLoaded(function () {
                    $(elements).removeClass('is-loading');
                    $container.masonry('appended', elements);

                    if (filter) {
                        $container.masonry();
                    }
                });

            $container.find('a').colorbox({
                maxWidth: '970px',
                maxHeight: '95%',
                title: function () {
                    return $(this).find('.inner').html();
                }
            });

            added += sliceData.length;
            
            if (added < filteredData.length) {
                $loadMoreButton.show();
            } else {
                $loadMoreButton.hide();
            }
        }

        function filterItems () {
            var key = $(this).val(),
                masonryItems = $container.masonry('getItemElements');

            $container.masonry('remove', masonryItems);

            filteredData = [];
            added = 0;

            if (key === 'all') {
                filteredData = allData;
            } else {
                filteredData = $.grep(allData, function(item) {
                    return item.category === key;
                });
            }

            addItems(true);
        }
    });
});