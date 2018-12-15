const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+'

 

 

 

client.on('ready', () => {

  console.log(Logged in as ${client.user.tag}!);

client.user.setGame(*help *inv,"https://www.twitch.tv/dggamingbot")

  console.log('')

  console.log('')

  console.log('╔[═════════════════════════════════════════════════════════════════]╗')

  console.log([Start] ${new Date()});

  console.log('╚[═════════════════════════════════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════════════════════════════]╗');

  console.log(Logged in as * [ " ${client.user.username} " ]);

  console.log('')

  console.log('Informations :')

  console.log('')

  console.log(servers! [ " ${client.guilds.size} " ]);

  console.log(Users! [ " ${client.users.size} " ]);

  console.log(channels! [ " ${client.channels.size} " ]);

  console.log('╚[════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════]╗')

  console.log(' Bot Is Online')

  console.log('╚[════════════]╝')

  console.log('')

  console.log('')

});
client.on('message',async message => {

  if(message.author.bot || message.channel.type === '+bc') return;

  let args = message.content.split(' ');

  if(args[0] === `+bc`) {

    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');

    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');

 

    let msgCount = 0;

    let errorCount = 0;

    let successCount = 0;

    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {

      message.guild.members.forEach(g => {

        g.send(args.slice(1).join(' ')).then(() => {

          successCount++;

          msgCount++;

          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);

        }).catch(e => {

          errorCount++;

          msgCount++;

          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);

        });

      });

    });

  }

});
    

              client.on("message", message => {

    if (message.content === (prefix + "help")) {

    message.channel.send("**تم الارسال بلخاص**")

     const embed = new Discord.RichEmbed() 

         .setColor("#580e6b")

         .setThumbnail(message.author.avatarURL)

         .setDescription(`

         **

👅اوامر البوت👅

========================

[+ برفكس البوت] 
 
[bc لإرسال برودكاست مع عدد الرسايل المرسله و الغير المرسله]

[البوت بيرحب بالأعضاء]

=============================

[mutechannel لتقفيل شات روم معين] 

[unmutechannel لفتح شات روم معين] 

[ban لحظر او تبنيد شخص معين من السيرفر] 

=================================

[Kick لطرد عضو من السيرفر]

[bot لمعرفة معلومات البوت]

[Support لسيرفر الدعم] 
   **

   `)

   message.author.sendEmbed(embed)

   

   }

   }); 
var prefix = "+"

  if (message.author.x5bz) return;

  if (!message.content.startsWith(prefix)) return;

 

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

 

  let args = message.content.split(" ").slice(1);

 

  if (command == "ban") {

               if(!message.channel.guild) return message.reply('** This command only for servers**');

         

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");

  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");

  let user = message.mentions.users.first();

  let reason = message.content.split(" ").slice(2).join(" ");

  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");

  if(!reason) return message.reply ("**اكتب سبب الطرد**");

  if (!message.guild.member(user)

  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

 

  message.guild.member(user).ban(7, user);

 

  const banembed = new Discord.RichEmbed()

  .setAuthor(`BANNED!`, user.displayAvatarURL)

  .setColor("PURPLE")

  .setTimestamp()

  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')

  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')

  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')

  message.channel.send({

    embed : banembed

  })

}

});
client.on('message', message => {

 

    if (message.content === ".mutechannel") {

                        if(!message.channel.guild) return message.reply(' This command only for servers');

 

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: false

 

           }).then(() => {

               message.reply("تم تقفيل الشات :white_check_mark: ")

           });

             }

 

if (message.content === ".unmutechannel") {

    if(!message.channel.guild) return message.reply(' This command only for servers');

 

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: true

 

           }).then(() => {

               message.reply("تم فتح الشات:white_check_mark:")

           });

             }

 

 

 

});
 
client.on('message', message => {

    var prefix = "+"

  if (message.author.x5bz) return;

  if (!message.content.startsWith(prefix)) return;

 

  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);

 

  let args = message.content.split(" ").slice(1);

 

  if (command == "kick") {

               if(!message.channel.guild) return message.reply('** This command only for servers**');

         

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");

  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");

  let user = message.mentions.users.first();

  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");

  if(!reason) return message.reply ("**اكتب سبب الطرد**");

  if (!message.guild.member(user)

  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

 

  message.guild.member(user).kick();

 

  const kickembed = new Discord.RichEmbed()

  .setAuthor(`KICKED!`, user.displayAvatarURL)

  .setColor("PURPLE")

  .setTimestamp()

  .addField("**اء تم اعطا طرد لي:**",  '**[ ' + `${user.tag}` + ' ]**')

  .addField("**بواسطة:**", '**[ ' + `${message.author.tag}` + ' ]**')

  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')

  message.channel.send({

    embed : kickembed

  })

}

}); 
client.on ('message', msg => {

  if (msg.content ===  'عرص،كلب،كس امك،ابن كلبه،قحبه،زبي،كس اختك،كل خرا،كل زق') {

    msg.reply('إن لك رقيب عتيد لكل ما تقوم به').then(sb => {  

    msg.delete(30);

   sb.delete(1200);

     

  })

  }

}); 
client.on('message', message => {
 
    if (message.content === "+bot") {
var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
    let embed = new Discord.RichEmbed()
 
.addField('**Bot Servers**',`[ ${client.guilds.size} ]`)
.addField('**Users**',`[ ${client.users.size} ]`)
.addField('**Channels**',`[ ${client.channels.size} ]`)
.addField('**ID**',`[ ${client.user.id} ]`)
.addField('**Name**',`[ ${client.user.tag} ]`)
.addField('Requested by:', "<@" + message.author.id + ">")
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
}
 
});
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('chat', 'welcome', 'hub', 'lobby');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | اطلق من دخل' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
   
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('PURPLE')
        .setFooter(`====اهلا السيرفر نور بيك و الله====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
 
    });



 

client.login(process.env.BOT_TOKEN);
