const express = require('express');
const companyTypeRoutes = require('./components/CompanyType/routes');
const industryTypeRoutes = require('./components/IndustryType/routes');
const specialtyRoutes = require('./components/Specialty/routes');
const postRoutes = require('./components/PostDetail/routes');
const tagRoutes = require('./components/Tag/routes');
const sessionRoutes = require('./components/Session/sessionRoutes');
const accountRoutes = require('./components/Account/routes');
const companyRoutes = require('./components/Company/routes');

const router = express.Router();

router.use('/companytypes', companyTypeRoutes);
router.use('/industrytypes', industryTypeRoutes);
router.use('/specialties', specialtyRoutes);
router.use('/posts', postRoutes);
router.use('/tags', tagRoutes);
router.use('/auth', sessionRoutes);
router.use('/accounts', accountRoutes);
router.use('/companies', companyRoutes);

module.exports = router;
