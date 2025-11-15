import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PremiumHeader from './components/PremiumHeader';
import PremiumFooter from './components/PremiumFooter';
import ScrollToTop from './components/ScrollToTop';
import NewHomePage from './pages/NewHomePage';
import About from './pages/About';
import Services from './pages/Services';
import AreasWeServe from './pages/AreasWeServe';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AllAppraisalServices from './pages/AllAppraisalServices';
import EstatePlanningStepUpBasis from './pages/services/EstatePlanningStepUpBasis';
import ResidentialAppraisals from './pages/services/ResidentialAppraisals';
import DivorceEstateAppraisals from './pages/services/DivorceEstateAppraisals';
import EstateAppraisal from './pages/services/EstateAppraisal';
import DateOfDeathValuation from './pages/services/DateOfDeathValuation';
import PMIRemoval from './pages/services/PMIRemoval';
import TaxAppeals from './pages/services/TaxAppeals';
import PreListingAppraisals from './pages/services/PreListingAppraisals';
import PrePurchaseAppraisal from './pages/services/PrePurchaseAppraisal';
import FSBOAppraisal from './pages/services/FSBOAppraisal';
import TrustAppraisal from './pages/services/TrustAppraisal';
import PrenuptialAppraisal from './pages/services/PrenuptialAppraisal';
import DateOfMarriageValuation from './pages/services/DateOfMarriageValuation';
import GiftTaxAppraisal from './pages/services/GiftTaxAppraisal';
import EstateTaxAppraisal from './pages/services/EstateTaxAppraisal';
import CharitableContributionAppraisal from './pages/services/CharitableContributionAppraisal';
import ExpertWitnessAppraisal from './pages/services/ExpertWitnessAppraisal';
import PartitionSuitAppraisal from './pages/services/PartitionSuitAppraisal';
import EminentDomainAppraisal from './pages/services/EminentDomainAppraisal';
import BankruptcyValuation from './pages/services/BankruptcyValuation';
import CoOwnerBuyoutAppraisal from './pages/services/CoOwnerBuyoutAppraisal';
import RetrospectiveAppraisal from './pages/services/RetrospectiveAppraisal';
import FamilyTransferAppraisal from './pages/services/FamilyTransferAppraisal';
import FHAVAAppraisals from './pages/services/FHAVAAppraisals';
import DivorceAndFamilyLawAppraisals from './pages/categories/DivorceAndFamilyLawAppraisals';
import EstateTrustInheritanceAppraisals from './pages/categories/EstateTrustInheritanceAppraisals';
import TaxAppealsIRS from './pages/categories/TaxAppealsIRS';
import LitigationExpertWitness from './pages/categories/LitigationExpertWitness';
import SpecialtyComplexValuations from './pages/categories/SpecialtyComplexValuations';
import RetrospectiveHistoricalValuations from './pages/categories/RetrospectiveHistoricalValuations';
import DivorceAppraisal from './pages/services/DivorceAppraisal';
import EquitableDistributionAppraisal from './pages/services/EquitableDistributionAppraisal';
import NonMaritalPropertyDivision from './pages/services/NonMaritalPropertyDivision';
import LifeEstateAppraisal from './pages/services/LifeEstateAppraisal';
import InheritanceTaxAppraisal from './pages/services/InheritanceTaxAppraisal';
import StepUpBasisValuation from './pages/services/StepUpBasisValuation';
import CapitalGainsTaxAppraisal from './pages/services/CapitalGainsTaxAppraisal';
import ConservationEasementAppraisal from './pages/services/ConservationEasementAppraisal';
import LitigationSupportAppraisal from './pages/services/LitigationSupportAppraisal';
import DiminutionInValueAppraisal from './pages/services/DiminutionInValueAppraisal';
import FractionalInterestValuation from './pages/services/FractionalInterestValuation';
import FamilyLimitedPartnershipValuation from './pages/services/FamilyLimitedPartnershipValuation';
import CharitableRemainderTrustValuation from './pages/services/CharitableRemainderTrustValuation';
import PortfolioValuation from './pages/services/PortfolioValuation';
import InsuranceReplacementCost from './pages/services/InsuranceReplacementCost';
import FinancialPlanningAppraisal from './pages/services/FinancialPlanningAppraisal';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <PremiumHeader />
          <Routes>
            <Route path="/" element={<NewHomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/residential-appraisals" element={<ResidentialAppraisals />} />
            <Route path="/services/divorce-estate-appraisals" element={<DivorceEstateAppraisals />} />
            <Route path="/services/estate-appraisal" element={<EstateAppraisal />} />
            <Route path="/services/date-of-death-valuation" element={<DateOfDeathValuation />} />
            <Route path="/services/pmi-removal" element={<PMIRemoval />} />
            <Route path="/services/tax-appeals" element={<TaxAppeals />} />
            <Route path="/services/pre-listing-appraisals" element={<PreListingAppraisals />} />
            <Route path="/services/pre-purchase-appraisal" element={<PrePurchaseAppraisal />} />
            <Route path="/services/fsbo-appraisal" element={<FSBOAppraisal />} />
            <Route path="/services/trust-appraisal" element={<TrustAppraisal />} />
            <Route path="/services/prenuptial-appraisal" element={<PrenuptialAppraisal />} />
            <Route path="/services/date-of-marriage-valuation" element={<DateOfMarriageValuation />} />
            <Route path="/services/gift-tax-appraisal" element={<GiftTaxAppraisal />} />
            <Route path="/services/estate-tax-appraisal" element={<EstateTaxAppraisal />} />
            <Route path="/services/charitable-contribution-appraisal" element={<CharitableContributionAppraisal />} />
            <Route path="/services/expert-witness-appraisal" element={<ExpertWitnessAppraisal />} />
            <Route path="/services/partition-suit-appraisal" element={<PartitionSuitAppraisal />} />
            <Route path="/services/eminent-domain-appraisal" element={<EminentDomainAppraisal />} />
            <Route path="/services/bankruptcy-valuation" element={<BankruptcyValuation />} />
            <Route path="/services/co-owner-buyout-appraisal" element={<CoOwnerBuyoutAppraisal />} />
            <Route path="/services/retrospective-appraisal" element={<RetrospectiveAppraisal />} />
            <Route path="/services/family-transfer-appraisal" element={<FamilyTransferAppraisal />} />
            <Route path="/services/fha-va-appraisals" element={<FHAVAAppraisals />} />
            <Route path="/areas-we-serve" element={<AreasWeServe />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services/all-appraisal-services" element={<AllAppraisalServices />} />
            <Route path="/services/estate-planning-step-up-basis" element={<EstatePlanningStepUpBasis />} />
            <Route path="/categories/divorce-family-law-appraisals" element={<DivorceAndFamilyLawAppraisals />} />
            <Route path="/categories/estate-trust-inheritance-appraisals" element={<EstateTrustInheritanceAppraisals />} />
            <Route path="/categories/tax-appeals-irs" element={<TaxAppealsIRS />} />
            <Route path="/categories/litigation-expert-witness" element={<LitigationExpertWitness />} />
            <Route path="/categories/specialty-complex-valuations" element={<SpecialtyComplexValuations />} />
            <Route path="/categories/retrospective-historical-valuations" element={<RetrospectiveHistoricalValuations />} />
            <Route path="/services/divorce-appraisal" element={<DivorceAppraisal />} />
            <Route path="/services/equitable-distribution-appraisal" element={<EquitableDistributionAppraisal />} />
            <Route path="/services/non-marital-property-division" element={<NonMaritalPropertyDivision />} />
            <Route path="/services/life-estate-appraisal" element={<LifeEstateAppraisal />} />
            <Route path="/services/inheritance-tax-appraisal" element={<InheritanceTaxAppraisal />} />
            <Route path="/services/step-up-basis-valuation" element={<StepUpBasisValuation />} />
            <Route path="/services/capital-gains-tax-appraisal" element={<CapitalGainsTaxAppraisal />} />
            <Route path="/services/conservation-easement-appraisal" element={<ConservationEasementAppraisal />} />
            <Route path="/services/litigation-support-appraisal" element={<LitigationSupportAppraisal />} />
            <Route path="/services/diminution-in-value-appraisal" element={<DiminutionInValueAppraisal />} />
            <Route path="/services/fractional-interest-valuation" element={<FractionalInterestValuation />} />
            <Route path="/services/family-limited-partnership-valuation" element={<FamilyLimitedPartnershipValuation />} />
            <Route path="/services/charitable-remainder-trust-valuation" element={<CharitableRemainderTrustValuation />} />
            <Route path="/services/portfolio-valuation" element={<PortfolioValuation />} />
            <Route path="/services/insurance-replacement-cost" element={<InsuranceReplacementCost />} />
            <Route path="/services/financial-planning-appraisal" element={<FinancialPlanningAppraisal />} />
          </Routes>
          <PremiumFooter />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
