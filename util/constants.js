const MESSAGES = {
  COMMANDS: {
    ABSENCE: {
      ABSENCE: {
        name: 'absence',
        aliases: ['absence'],
        category: 'absence',
        description: "Fais une suggestion !",
        cooldown: 60,
        usage: '<votre_suggestion>',
        isUserAdmin: false,
        permissions: false,
        args: true
      },
    },
    CHILL: {
      PING: {
        name: 'ping',
        aliases: ['ping'],
        category: 'chill',
        description: 'Renvoie pong!',
        cooldown: 10,
        usage: '',
        isUserAdmin: false,
        permissions: false,
        args: false
      },
      SAY: {
        name: 'say',
        aliases: ['repeat', 'rep'],
        category: 'chill',
        description: "Répéte le message d'un utilisateur",
        cooldown: 10,
        usage: '<votre_message>',
        isUserAdmin: false,
        permissions: true,
        args: true
      },
    },
    EMBED: {
      DICE: {
        name: 'dice',
        description: 'Renvoie la valeur de plusieurs dès!',
        category: 'embed',
        aliases: ['dice'],
        cooldown: 10,
        usage: '',
        isUserAdmin: false,
        permissions: false,
        args: false
      },
      INFO: {
        name: 'info',
        aliases: ['info'],
        category: 'embed',
        description: 'Renvoie un embed',
        cooldown: 10,
        usage: '',
        isUserAdmin: false,
        permissions: true,
        args: false
      },
    },
    INFO: {
      HELP: {
        name: "help",
        aliases: ['help'],
        category: 'misc',
        description: "Renvoie une liste de commandes ou les informations sur une seule!",
        cooldown: 3,
        usage: '<command_name>',
        isUserAdmin: false,
        permissions: false,
        args: false
      },
      USERINFO: {
        name: 'userinfo',
        aliases: ['userinfo'],
        category: 'info',
        description: 'Renvoie les informations d\'un utilisateur mentionné',
        cooldown: 10,
        usage: '',
        isUserAdmin: false,
        permissions: false,
        args: false
      },
    },
    MODERATION: {
      BAN: {
        name: 'ban',
        aliases: ['ban'],
        category: 'moderation',
        description: "Ban un utilisateur !",
        cooldown: 10,
        usage: '<@user> <raison>',
        isUserAdmin: true,
        permissions: true,
        args: true
      },
      KICK: {
        name: 'kick',
        aliases: ['kick'],
        category: 'moderation',
        description: "Kick un utilisateur !",
        cooldown: 10,
        usage: '<@user> <raison>',
        isUserAdmin: true,
        permissions: true,
        args: true
      },
      MUTE: {
        name: "mute",
        aliases: ['mute'],
        category: 'moderation',
        description: "Mute un utilisateur",
        cooldown: 10,
        usage: '<@user> <time>',
        isUserAdmin: true,
        permissions: true,
        args: true
      },
      PRUNE: {
        name: "prune",
        aliases: ['prune'],
        category: 'Moderation',
        description: "Purge un nombre de message spécifié sur un utilisateur spécifié",
        cooldown: 10,
        usage: '<@user> <nbr_messages>',
        isUserAdmin: true,
        permissions: true,
        args: true
      },
      PURGE: {
        name: "purge",
        aliases: ['purge'],
        category: 'moderation',
        description: "Purge un nombre de message spécifié",
        cooldown: 10,
        usage: '<nbr_messages>',
        isUserAdmin: false,
        permissions: true,
        args: true
      },
      UNBAN: {
        name: 'unban',
        aliases: ['unban'],
        category: 'moderation',
        description: "Unban un utilisateur !",
        cooldown: 10,
        usage: '<user_id>',
        isUserAdmin: false,
        permissions: true,
        args: true
      },
      UNMUTE: {
        name: "unmute",
        aliases: ['unmute'],
        category: 'moderation',
        description: "Unmute un utilisateur",
        cooldown: 10,
        usage: '<@user>',
        isUserAdmin: true,
        permissions: true,
        args: true
      },
    },
    PLAINTES: {
      REPORT: {
        name: 'report',
        aliases: ['report'],
        category: 'plaintes',
        description: "Fais une suggestion !",
        cooldown: 60,
        usage: '<votre_suggestion>',
        isUserAdmin: false,
        permissions: false,
        args: true
      },
    },
    QUESTION: {
      SUGGEST: {
        name: 'suggest',
        aliases: ['suggest'],
        category: 'question',
        description: "Fais une suggestion !",
        cooldown: 60,
        usage: '<votre_suggestion>',
        isUserAdmin: false,
        permissions: false,
        args: true
      },
    },
    ROLE: {
      ADD: {
        name: 'add',
        aliases: ['add'],
        category:'role',
        description: 'Ajouter un rôle!',
        cooldown: 10,
        usage: '',
        isUserAdmin: false,
        permissions: true,
        args: false
      },
      ADDS: {
        name: 'adds',
        aliases: ['adds'],
        category:'role',
        description: 'Ajouter plusieurs rôles!',
        cooldown: 10,
        usage: '',
        isUserAdmin: false,
        permissions: true,
        args: false
      },
      REMOVE: {
        name: 'remove',
        aliases: ['remove'],
        category:'role',
        description: 'Supprimer un rôle!',
        cooldown: 10,
        usage: '',
        isUserAdmin: false,
        permissions: true,
        args: false
      },
    }
  }
}

exports.MESSAGES = MESSAGES;