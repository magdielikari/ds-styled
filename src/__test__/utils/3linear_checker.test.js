import fn from '../../utils/3linear_checker'

describe('3linear_checker', 
    ()=> {
        it('Without checked values and independent',
            () => {
                const sol = fn('','','','0','')
                expect(sol).toBe('0')
            }
        )
        it('With last checked values and independent',
        () => {
                const sol = fn('','','a','0','')
                expect(sol).toBe('a')
            }
        )
        it('With penultimate checked values and independent',
        () => {
                const sol = fn('','a','','0','')
                expect(sol).toBe('a')
            }
        )
        it('With penultimate and last checked values and independent',
        () => {
                const sol = fn('','a','b','0','')
                expect(sol).toBe('a')
            }
        )
        it('With antepenultimate checked values and independent',
        () => {
                const sol = fn('a','','','0','')
                expect(sol).toBe('a')
            }
        )
        it('With antepenultimate and penultimate checked values and independent',
        () => {
                const sol = fn('a','b','','0','')
                expect(sol).toBe('a')
            }
        )
        it('With antepenultimate and last checked values and independent',
        () => {
                const sol = fn('a','','b','0','')
                expect(sol).toBe('a')
            }
        )
        it('With antepenultimate, penultimate and last checked values and independent',
        () => {
                const sol = fn('a','b','c','0','')
                expect(sol).toBe('a')
            }
        )
        it('Without checked values but with independent',
        () => {
                const sol = fn('','','','0','px')
                expect(sol).toBe('0px')
            }
        )
        it('With last checked values and independent',
        () => {
                const sol = fn('','','a','0','px')
                expect(sol).toBe('apx')
            }
        )
        it('With penultimate checked values and independent',
        () => {
            const sol = fn('','a','','0','px')
            expect(sol).toBe('apx')
        }
        )
        it('With penultimate and last checked values and independent',
        () => {
                const sol = fn('','a','b','0','px')
                expect(sol).toBe('apx')
            }
        )
        it('With antepenultimate checked values and independent',
        () => {
                const sol = fn('a','','','0','px')
                expect(sol).toBe('apx')
            }
        )
        it('With antepenultimate and last checked values and independent',
        () => {
                const sol = fn('a','','c','0','px')
                expect(sol).toBe('apx')
            }
        )
        it('With antepenultimate and penultimate checked values and independent',
        () => {
                const sol = fn('a','b','','0','px')
                expect(sol).toBe('apx')
            }
        )
        it('With antepenultimate, penultimate and last checked values and independent',
        () => {
                const sol = fn('a','b','c','0','px')
                expect(sol).toBe('apx')
            }
        )
    }
)