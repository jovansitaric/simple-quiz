(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {

        const getQuestions = {

            init: function () {
                const self = this;

                const getAllQuestions = document.querySelectorAll('.js-content li');

                getAllQuestions.forEach(function(item) {
                    item.addEventListener('click', function () {
                        self.toggle.call(item);
                    });
                });
            },
            
            toggle: function () {
                const getCorrectAnswer = this.getAttribute('data-true');

                const getCurrentContainer = this.parentElement.parentElement;

                if (getCorrectAnswer) {
                    getCurrentContainer.classList.remove('-invalid');
                    getCurrentContainer.classList.add('-success');
                }

                else {
                    getCurrentContainer.classList.remove('-success');
                    getCurrentContainer.classList.add('-invalid');
                }
            }
        };

        /**
         * Initialize
         */

        getQuestions.init();
    });
}())