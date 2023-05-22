import admin from '../../../lib/firebaseAdmin'

export default async function handler(req, res) {
    const token = req.body.token;
    const payload = {
        data: {
            notifee: JSON.stringify({
                title: req.body.title,
                body: req.body.input,
                android: {
                    channelId: 'default',
                    vibrationPattern: [300, 500],
                    smallIcon: 'ic_launcher',
                    actions: [
                        {
                            title: 'Responder',
                            pressAction: {
                                id: 'reply',
                                launchActivity: 'default',
                            },
                            input: true,
                        }
                    ]
                },
                data: {
                    userid: req.body.userid,
                    messageid: req.body.messageid,
                }
            })
        }
    }
    const options = {
        priority: 'high',
        timeToLive: 60 * 60 * 24
    }
    admin.messaging().sendToDevice(token, payload, options)
    res.status(200)
    res.json({ mensagem: 'Enviado' })
    return res
}