const { BetaAnalyticsDataClient } = require('@google-analytics/data');

const propertyId = process.env.GA_PROPERTY_ID
const analyticsDataClient = new BetaAnalyticsDataClient();

exports.getWeekData = async (req, res) => {
    try {
        const [response] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '7daysAgo',
                    endDate: 'today'
                }
            ],
            metrics: [
                {
                    name: 'activeUsers'
                },
                {
                    name: 'totalUsers'
                },
                {
                    name: 'newUsers'
                },
                {
                    name: 'userEngagementDuration'
                },
                {
                    name: 'eventCount'
                }
            ],
            dimensions: [
                {
                    name: 'date'
                }
            ],
        });
    
        if (response.rowCount) {
            res.status(201).json(response.rows)
        } else {
            res.status(201).json([])
        }
    } catch(err) {
        res.status(403).json(err)
    }
}

exports.getGraphData = async (req, res) => {
    try {
        const [response] = await analyticsDataClient.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                    startDate: '7daysAgo',
                    endDate: 'today'
                }
            ],
            metrics: [
                {
                    name: 'totalUsers'
                },
            ],
            dimensions: [
                {
                    name: 'date'
                }
            ],
        });
    
        if (response.rowCount) {
            res.status(201).json(response.rows)
        } else {
            res.status(201).json([])
        }
    } catch(err) {
        res.startDate(403).json(err)
    }
}
