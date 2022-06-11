'use strict';

/**
 *  annon-leadform-submission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::annon-leadform-submission.annon-leadform-submission', (ctx) => {

    // const { data } = ctx.request.body;
    // console.log("controllerData", data);
    return {
        async create(ctx) {
         
            const { data } = ctx.request.body;

            console.log("CreateControllerData", data);

            await strapi.plugins['email'].services.email.send({
                to: 'troyflavel@gmail.com',
                from: `${data.email_address}`,
        
                replyTo: 'troyflavel@gmail.com',
                subject: `Portfolio page email from ${data.name}`,
                text: `Troias!, ${data.name} has sent you a message from your portfolio page.\n\n${data.message}`,
                html: `<p>Troias!, ${data.name} has sent you a message from your portfolio page.</p>\n<p>${data.message}</p>`
              });

        }
    };
});
