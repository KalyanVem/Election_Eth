var Election = artifacts.require("./Election.sol");

contract('Election', (accounts) => {
    before(async () =>{
        this.election = await Election.deployed()
    })

    it('Initialize with two candidates', async () => {
        const candCount = await this.election.candidatesCount();
        assert.equal(candCount, 2);
    })

    it('Initializes candidates with correct values', async () => {
        const candidate1 = await this.election.candidates(1);
        assert.equal(candidate1[0], 1, "Contains correct id");
        assert.equal(candidate1[1], "Candidate 1", "Contains correct name");
        assert.equal(candidate1[2], 0, "Contains correct vote count");

        const candidate2 = await this.election.candidates(2);
        assert.equal(candidate2[0], 2, "Contains correct id");
        assert.equal(candidate2[1], "Candidate 2", "Contains correct name");
        assert.equal(candidate2[2], 0, "Contains correct vote count");
    });
})