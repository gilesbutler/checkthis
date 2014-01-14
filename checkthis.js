/* =============================================================
 * checkthis.js v0.0.1
 * =============================================================
 * Copyright 2012 Giles Butler
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

!function( $ ) {

 "use strict"

  $.fn.checkthis = function( options ) {

    return this.each(function() {

      $(this).on('click', function(e){
        // Prevent the default click event
        e.preventDefault();

        // Cache any selectors
        var $this = $(this),
            $target = $(this.getAttribute('data-checkthis'));

        // If it's a radio button...
        if ($target.prop("type") === 'radio') {
          // Check it
          $target.prop('checked',true);
          // Remove the other check this classes
          $('.checkthis').removeClass('checked');
          // Add the checked class to the clicked element
          $this.addClass('checked');
        }

        // If it's a checkbox...
        if ($target.prop("type") === 'checkbox') {
          // Check to see if it's been clicked already
          if ($this.hasClass('checked')) {
            // Uncheck it
            $target.prop('checked',false);
            // remove the checked class from the clicked element
            $this.removeClass('checked');
          } else {
            // Check it
            $target.prop('checked',true);
            // Add the checked class to the clicked element
            $this.addClass('checked');
          }

        }
      });

    });

  };

}( window.jQuery );